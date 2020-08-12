import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { DownloadableFiles } from "./index"
import demoFiles, {one} from "./data"

export default {
    title: "4 Components/All/Downloadable File",
    decorators: [withA11y]
}

export const singleFile = () =>
    <div style={{padding: "20px"}}>
        <DownloadableFiles
            files={one}
        />
    </div>

export const multipleFiles = () =>
    <div style={{padding: "20px"}}>
        <DownloadableFiles
            files={demoFiles}
        />
    </div>
