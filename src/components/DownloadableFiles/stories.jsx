import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { DownloadableFiles } from "./index"
import demoFiles from "./data"

export default {
    title: "2 All Components/Downloadable File",
    decorators: [withA11y]
}

export const singleFile = () =>
    <div style={{padding: "20px"}}>
        <DownloadableFiles
            files={demoFiles[0]}
        />
    </div>

export const multipleFiles = () =>
    <div style={{padding: "20px"}}>
        <DownloadableFiles
            files={demoFiles}
        />
    </div>
