import { ProjectType } from "@/components/sections/Project";


export const projects: ProjectType[] = [
    {
        title: "onABudget",
        descriptionEn: "A budgeting app that allows you to create and manage your budget, track your expenses, and set financial goals.",
        descriptionPt: "Um aplicativo de orçamento que permite criar e gerenciar seu orçamento, rastrear suas despesas e definir objetivos financeiros.",
        stack: ["Next.js", "Pocketbase", "React", "TailwindCSS", "Docker", "Kubernetes",],
        gitHubLink: "https://github.com/AndreRimes/onABudget",
        externalLink: "https://onabudget.andrerimes.com/",
        imgPath: "/images/onAbudget.png"
    },
    {
        title: "Rustainer",
        descriptionEn: "A container runtime written in Rust that manages the lifecycle of containers, including pulling images from Docker Hub, filesystem layering, and network isolation using namespaces.",
        descriptionPt: "Uma runtime de contêiner escrita em Rust que gerencia o ciclo de vida de contêineres, incluindo o download de imagens do Docker Hub, camadas de sistema de arquivos e isolamento de rede via namespaces.",
        stack: ["Rust", "Tokio", "Docker API", "Linux Namespaces", "Iptables"],
        gitHubLink: "https://github.com/AndreRimes/rustainer",
        imgPath: "/images/rustainer.png" 
    },
    {
        title: "Portfolio",
        descriptionEn: "A portfolio website that showcases my skills and experiences.",
        descriptionPt: "Um site de portfolio que mostra minhas habilidades e experiências.",
        stack: ["Next.js", "React", "TailwindCSS", "Framer-Motion", "Docker", "Kubernetes"],
        gitHubLink: "https://github.com/AndreRimes/portifolio",
        externalLink: "https://portfolio.andrerimes.com/",
        imgPath: "/images/portfolio.png"
    },
    {
        title: "Assembly Risc V Gauntlet Game",
        descriptionEn: "Created a replica of the Gauntlet 1985 game in Assembly RISC-V using RARS IDE. Gained insights into low-level languages and fundamental computer science concepts",
        descriptionPt: "Criou uma replica do jogo Gauntlet 1985 em Assembly RISC-V usando RARS IDE. Ganhou insights em linguagens de baixo nível e conceitos de ciência da computação fundamentais",
        stack: ["Assembly RISC-V", "RARS IDE"],
        imgPath: "/images/gauntlet.png",
        gitHubLink: "https://github.com/AndreRimes/Gauntlet-Replica",
    },
    {
        title: "BidNow",
        descriptionEn: "A real-time auction platform built with Next.js and NestJS, featuring live bidding via WebSockets and a recommendation microservice based on word embeddings derived from product tags and user bidding history.",
        descriptionPt: "Uma plataforma de leilões em tempo real construída com Next.js e NestJS, com lances ao vivo via WebSocket e um microserviço de recomendação baseado em word embeddings das tags dos produtos e no histórico de lances do usuário.",
        stack: [
            "Next.js",
            "NestJS",
            "WebSocket",
            "TypeScript",
            "PostgreSQL",
            "Docker",
            "Kubernetes",
            "Word Embeddings",
            "Microservices"
        ],
        gitHubLink: "https://github.com/AndreRimes/BidNowFront",
        imgPath: "/images/bidnow.png"
    },
    {
        title: "Selo Social",
        descriptionEn: "Developed in CJR with a group of developers, a plataform for the company 'Selo Social' to help then manege their tasks of evaluating sustainable projects ",
        descriptionPt: "Desenvolvido em CJR com um grupo de desenvolvedores, uma plataforma para a empresa 'Selo Social' para ajudar a gerenciar suas tarefas de avaliar projetos sustentáveis",
        stack: ["Next.js", "Nestjs", "typescript", "ReactQuey", "prisma", "PostgreSQL"],
        externalLink: "https://selosocial.org/",
        imgPath: "/images/selo.png",
    }
]