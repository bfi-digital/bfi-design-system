import React, {
  cloneElement,
  createContext,
  FC,
  KeyboardEvent,
  MouseEvent,
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import theme from '../_theme'

const Styled = {
  Global: createGlobalStyle`
    body.modal-open {
      overflow: hidden;
    }
  `,
  Dialog: styled.dialog<{ modeless?: boolean }>`
    padding: 0;
    border: none;
    max-width: 75vw;

    // modeless variant styling
    ${
      ({ modeless }) => modeless
      ? `
        border-block: 2px solid ${theme.darkGrey};
        box-shadow: 0 0 6px 6px ${theme.grey};
      `
      : ''
    }

    ::backdrop {
      background-color: ${theme.black}80;
      backdrop-filter: blur(3px);
    }

    // content styling
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  `,
  DialogOpener: (Component: FC<{ className: string, children: ReactElement }>) => styled(Component)`
    cursor: pointer;

    :focus {
      outline: 3px solid ${theme.focus};
    }

    :hover img {
      filter: grayscale(100%) contrast(1) blur(0px);
      mix-blend-mode: multiply;
    }
  `,
  DialogCloser: styled.div`
    position: absolute;
    left: -32px;
  `,
  CloseButton: styled.button<{ modeless?: boolean }>`
    background-color: transparent;
    border: none;
    color: ${({ modeless }) => modeless ? theme.darkGrey : theme.white};
    cursor: pointer;
    font-size: 30px;
    line-height: 30px;
    position: ${({ modeless }) => modeless ? 'static' : 'fixed'};

    ::before {
      content: '\\000D7';
    }

    :hover {
      opacity: 0.7;
    }

    :focus {
      outline: none;
      border-bottom: 3px solid ${theme.focus};
    }
  `
}

// calls any pre-existing click/keydown event handlers in addition to the state modifier
const callAll = (...fns: ((e?: KeyboardEvent) => void)[]) => (...args: (MouseEvent|KeyboardEvent)[]) => fns.forEach(fn => fn && fn(...(args as [])))

const state = ({ modeless }: { [key: string]: boolean | undefined }) => {
  const [isOpen, setIsOpen] = useState(false)
  return {
    modeless, // not modal
    isOpen,
    setIsOpen
  }
}

const DialogContext = createContext({} as ReturnType<typeof state>)

const Dialog: FC<{ modeless?: boolean }> = ({ modeless, ...props }) => <DialogContext.Provider value={state({ modeless })} {...props} />

const DialogOpener = Styled.DialogOpener(
  ({ className: scClassName, children: child }) => {
    const { className: childClassName, onClick, onKeyDown } = child.props
    const { setIsOpen } = useContext(DialogContext)
    return cloneElement(child, {
      onClick: callAll(() => setIsOpen(true), onClick),
      onKeyDown: callAll((e) => {
        if (/Enter|Space/.test(String(e?.code))) {
          setIsOpen(true)
        }
      }, onKeyDown),
      className: `${scClassName}${childClassName ? ` ${childClassName}` : ''}`,
      tabIndex: '0',
      role: 'button'
    })
  }
)

const DialogContentsBase: FC<{ children: ReactElement }> = ({ children, ...props }) => {
  const { modeless, isOpen, setIsOpen } = useContext(DialogContext)
  const closeDialog = () => setIsOpen(false)
  const preventAutoClose = (e: MouseEvent) => e.stopPropagation()
  const ref: { current: HTMLDialogElement | null } = useRef(null)

  useEffect(() => {
    if (isOpen) {
      ref.current?.[(modeless ? 'show' : 'showModal')]()
      if (!modeless) document.body.classList.add('modal-open') // prevent bg scroll
    } else {
      ref.current?.close()
      document.body.classList.remove('modal-open')
    }
  }, [isOpen])

  return (
    <>
      <Styled.Global />
      <Styled.Dialog ref={ref} onClose={closeDialog} onCancel={closeDialog} onClick={closeDialog} modeless={modeless} {...props}>
        <Styled.DialogCloser>
          <Styled.CloseButton type="button" aria-label="Close" onClick={closeDialog} modeless={modeless} />
        </Styled.DialogCloser>
        {
          cloneElement(children, {
            onClick: preventAutoClose
          })
        }
      </Styled.Dialog>
    </>
  )
}

const DialogContents: FC<{ children: ReactElement }> = ({ children, ...props }) => (
  <DialogContentsBase {...props}>
    { children }
  </DialogContentsBase>
)

export { Dialog, DialogOpener, DialogContents }
