import commander from "commander"
import pkg from "../package.json"
import { ParsedArgs } from "./interface"
import { error } from "./libs/common"
import { StrideBuildNotication } from "./libs/stride"

function validateArgs(args) {
  const props = ["token", "cloudId", "roomId", "project", "status", "ref", "url", "branch"]

  props.forEach(key => {
    if (args[key] === undefined) {
      throw new Error("Missing required options, please run with --help option to see more info")
    }
  })
}

commander
  .version(pkg.version)
  .option("--token <token>", "stride app token")
  .option("--cloud-id <cloudId>", "stride cloud id")
  .option("--room-id <roomId>", "stride room id")
  .option("--project <project>", "name of project")
  .option("--status <status>", "job status, succcess or failure", /^(success|failure)$/i)
  .option("--ref <ref>", "job reference id")
  .option("--url <url>", "job url the developer can click to see detail about the job")
  .option("--branch <branch>", "git branch name")
  .action((args: ParsedArgs) => {
    try {
      validateArgs(args)

      const { token, cloudId, roomId, project, status, ref, url, branch } = args

      const notifier = new StrideBuildNotication(token, cloudId, roomId)
      notifier.send({ project, status, ref, url, branch })
    } catch (e) {
      error(e.message)
      process.exit(255)
    }
  })
  .parse(process.argv)
