export interface ParsedArgs {
  token: string
  cloudId: string
  roomId: string
  status: string
  ref: string
  url: string
  branch: string
  project: string
}

export interface BuildInfo {
  status: string
  ref: string
  url: string
  branch: string
  project: string
}
