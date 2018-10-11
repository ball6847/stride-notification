import commander from "commander"
import pkg from "../package.json"
import { error } from "./common"

commander
  .version(pkg.version)
  .arguments("<local> <remote>")
  .action((localInput: string, remoteInput: string) => {
    try {
    } catch (e) {
      if (e instanceof TypeError) {
        error(e.message)
      }
    }
  })
  .parse(process.argv)
