import chalk from "chalk"

/**
 * Log message with red color
 *
 * @param message
 */
export function error(message: string) {
  console.log(chalk.red(message))
}

/**
 * Log message with green color
 *
 * @param message
 */
export function success(message: string) {
  console.log(chalk.green(message))
}
