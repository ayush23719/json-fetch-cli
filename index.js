#!/usr/bin/env node
import { program } from "commander";
import posts from "./commands/posts.js";
import comments from "./commands/comments.js";
import users from "./commands/users.js";

program.description(`\x1b[38;2;12;240;73m                  ------------ Welcome To JSON Fetch CLI ------------
    
    JSON Fetch CLI is a command-line tool for seamless interaction with the JSONPlaceholder API. 
    
    Author: @ayush23719
    \x1b[0m`);

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

program
    .command("comments")
    .option("-p, --pretty", "Pretty-print output from the API.")
    .description("Retrieve a list of all comments.")
    .action(comments);

program
    .command("users")
    .argument("[userId]", "ID of the user you'd like to retrieve.")
    .option("-p, --pretty", "Pretty-print output from the API.")
    .description(
        "Retrieve a list of all users or one user by passing the user ID (e.g., users 1)."
    )
    .action(users);

program.parse(process.argv);
