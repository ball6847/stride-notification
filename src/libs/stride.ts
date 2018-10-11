import { RxHR, RxHttpRequest } from "@akanass/rx-http-request"
import { BuildInfo } from "../interface"

export class StrideBuildNotication {
  http: RxHttpRequest

  constructor(token: string, cloudId: string, roomId: string) {
    this.http = this._createHttp(token, cloudId, roomId)
  }

  send(build: BuildInfo) {
    const body = this._createMessage(build)
    return this.http.post("/message", { body, json: true }).toPromise()
  }

  private _createHttp(token: string, cloudId: string, roomId: string) {
    const baseUrl = `https://api.atlassian.com/site/${cloudId}/conversation/${roomId}`

    return RxHR.defaults({
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      baseUrl,
    })
  }

  private _createMessage(build: BuildInfo) {
    const isSuccess = build.status.toLowerCase() === "success"
    const panelType = isSuccess ? "success" : "error"
    const messageSuffix = isSuccess
      ? "successfully built without any error"
      : "failed to build due to error"

    return {
      version: 1,
      type: "doc",
      content: [
        {
          type: "panel",
          attrs: {
            panelType,
          },
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: `Job #${build.ref}`,
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: build.url,
                      },
                    },
                  ],
                },
                {
                  type: "text",
                  text: ` on ${build.project}/${build.branch} ${messageSuffix}`,
                },
              ],
            },
          ],
        },
      ],
    }
  }
}
