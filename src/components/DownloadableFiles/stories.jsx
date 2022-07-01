import * as React from "react"
import { DownloadableFiles } from "./index"
import demoFiles, {one} from "./data"

export default {
    title: "4 Components/All/Downloadable File"
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
