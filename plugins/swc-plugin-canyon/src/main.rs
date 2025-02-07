use clap::{Parser, Subcommand};

#[derive(Subcommand)]
enum Commands {
    /// 输出版本信息
    Version,
}

#[derive(Parser)]
#[command(name = "swc-plugin-canyon")]
#[command(about = "jjjj")]
struct Cli {
    #[command(subcommand)]
    command: Option<Commands>,
}

#[tokio::main]
async fn main() {
    let args = Cli::parse();

    match args.command {
        Some(Commands::Version) => {
            println!("canyon-hhhhh 版本 1.2.10");
        }
        None => {
            eprintln!("kkkk");
        }
    }
}