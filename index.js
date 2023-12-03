import { program } from "commander";

program.description("Access the JSON Placeholder API");
program.name("jsonf");
program.usage("<command>");
program.addHelpCommand(false);
program.helpOption(false);

program
    .command("posts")
    .argument("[postId]", "ID of post you'd like to retrieve.")
    .option("-p, --pretty", "Pretty-print output from the API.")
    .description(
        "Retrieve a list of all posts or one post by passing the post ID (e.g., posts 1)."
    )
    .action(posts);

program.parse(process.argv);
