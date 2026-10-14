//Define o dicionário em português
const pt = {
    menu: {

        about: "Sobre Mim",
        projects: "Projetos",
        experiences: "Experiências",
        contact: "Contato",
        home: "Início",
        greenhouse: "Estufa",
    },
    projects: {
        title: "Jardim de projetos",
        subtitle: "Toque numa planta para ver o projeto",
        viewMore: "Ver mais",
        notFound: "Projeto não encontrado",
        back: "Voltar",
    },
    home: {
        hero: {
            title: "Cultivando software com propósito.",
            description:
                "Desenvolvedora de Software focada em criar soluções web modernas, acessíveis e sustentáveis utilizando React, Java, Spring Boot e boas práticas de arquitetura.",
            supportText:
                "Sophia.Plant é um ecossistema de projetos, aprendizado e crescimento contínuo construído para transformar ideias em experiências digitais relevantes.",
            projects: "Ver Projetos",
            contact: "Entrar em Contato",
            cardTitle:
                "Construindo soluções em constante evolução.",
            cardDescription:
                "Cada projeto é tratado como uma planta em crescimento: planejado com cuidado, desenvolvido com propósito e aprimorado continuamente."
        },
    
        about: {
            tag: "01 - Sobre",
            title: "Quem está por trás da Sophia.Plant?",
            subtitle:
                "Tecnologia, aprendizado contínuo e construção de soluções.",
            paragraph1:
                "Sou estudante e desenvolvedora de software apaixonada por tecnologia, experiência do usuário e resolução de problemas.",
            paragraph2:
                "A Sophia.Plant nasceu como um espaço para reunir projetos, conhecimentos, experimentos e evolução profissional em um único ecossistema digital.",
            action: "Conhecer minha trajetória"
        },
    
        projects: {
            tag: "02 - Projetos",
            title: "Projetos em crescimento",
            subtitle:
                "Soluções que representam aprendizado, evolução e prática constante.",
            viewAll: "Ver todos os projetos",
            action: "Explorar"
        },

        technologies: {
            tag: "03 - Tecnologias",
            title: "Tecnologias que utilizo",
            subtitle:
                "Ferramentas utilizadas para transformar ideias em soluções."
        },
        process: {
            tag: "04 - Processo",
            title: "Da ideia ao produto",
            subtitle:
                "Uma abordagem estruturada para construir software de qualidade.",
        
            planning: {
                title: "Planejamento",
                description:
                    "Entendimento do problema, definição de objetivos e estruturação da solução."
            },
        
            design: {
                title: "Design",
                description:
                    "Construção da experiência através de interface, usabilidade e consistência visual."
            },
        
            development: {
                title: "Desenvolvimento",
                description:
                    "Implementação focada em qualidade de código, desempenho e manutenção."
            },
        
            evolution: {
                title: "Evolução",
                description:
                    "Iteração contínua baseada em aprendizado, testes e feedback."
            }
        },
        footer: {
            title: "Vamos construir algo juntos?",
            description:
                "Estou sempre aberta a novos desafios, oportunidades, colaborações e projetos interessantes.",
            action: "Entrar em Contato"
        },
    },
    designSystem: {
        hero: {
            tag: "Design System",
            title: "ESTUFA",
            description:
                "Componentes, padrões visuais e decisões que sustentam todo o ecossistema Sophia.Plant.",
            supportText:
                "A Estufa documenta fundações, tokens, componentes e padrões para garantir consistência, clareza e acessibilidade.",
            back: "Voltar ao Jardim",
        },
    
        architecture: {
            tag: "01 - Arquitetura",
            title: "Das raízes às páginas",
            subtitle:
                "Cada camada herda a anterior e acrescenta contexto ao ecossistema.",
    
            steps: {
                foundations: {
                    title: "Foundations",
                    description: "Marca, cor e tipografia.",
                },
                tokens: {
                    title: "Tokens",
                    description: "Valores semânticos reutilizáveis.",
                },
                components: {
                    title: "Components",
                    description:
                        "Peças reutilizáveis construídas sobre os tokens.",
                },
                pages: {
                    title: "Pages",
                    description:
                        "Experiências completas para usuários.",
                },
            },
        },
    
        foundations: {
            tag: "02 - Fundações",
            title: "Marca, Cor e Tipografia",
            subtitle:
                "A identidade que sustenta toda a experiência.",
    
            identity: "Identidade",
            paletteTitle: "Paleta",
            typographyTitle: "Tipografia",
            
            palette: {
                cream: "Fundo principal.",
                leaf: "Ações e títulos.",
                sprout: "Superfícies suaves.",
                moss: "Fundos secundários.",
                petal: "Destaques.",
                soil: "Textos auxiliares.",
                sand: "Badges e detalhes."
            },
        
            identityDescription:
                "A planta simboliza evolução contínua, aprendizado e amadurecimento dos projetos.",
    
            identityGuideline:
                "Preservar proporções originais, manter respiro visual e evitar substituições por ícones genéricos.",
    
            typography: {
                h1: "Cultivando software com propósito.",
                h2: "Projetos em crescimento.",
                h3: "Experiências.",
    
                body:
                    "Texto utilizado para leitura, formulários, descrições, mensagens e comunicação principal da interface.",
    
                small:
                    "Metadados, observações, conteúdo auxiliar e informações de baixa prioridade visual.",
    
                h1Label:
                    "H1 · Lora · Hero principal e títulos de página.",
                h2Label:
                    "H2 · Lora · Seções principais.",
                h3Label:
                    "H3 · Lora · Subseções e agrupamentos de conteúdo.",
                bodyLabel:
                    "Body · Inter · 16px",
                smallLabel:
                    "Small · Inter · 12px",
            },
        },
    
        tokens: {
            tag: "03 - Design Tokens",
            title: "Tokens essenciais",
            subtitle:
                "Valores reutilizáveis que conectam intenção e interface.",
    
            spacing: "Espaçamento",
            radius: "Radius",
            elevation: "Elevação",
            motion: "Movimento",
        },
    
        components: {
            tag: "04 - Componentes",
            title:
                "Componentes que cultivam consistência",
    
            subtitle:
                "Biblioteca visual reutilizável do Sophia.Plant.",
    
            convention: "Convenção",
            buttons: "Buttons",
            tags: "Tags",
            formsTitle: "Formulários",
            maturity: "Maturidade",

            forms: {
                title: "Formulários",
                name: "Nome",
                namePlaceholder: "Digite seu nome",
                email: "Email",
                emailError: "Informe um email válido.",
                message: "Mensagem",
                messagePlaceholder: "Conte sobre seu projeto..."
            },
        },
    
        patterns: {
            tag: "05 - Padrões",
            title:
                "Padrões que organizam o jardim",
    
            subtitle:
                "Estruturas recorrentes que transformam componentes individuais em experiências completas.",
    
            contactCard: {
                title: "Cartão de Contato",
            
                description:
                    "Padrão utilizado para exibir canais de contato de forma clara, acessível e consistente em diferentes contextos da aplicação.",
            
                email: "sophia@email.com",
            
                emailDescription:
                    "Canal principal para networking, oportunidades, colaboração e troca de ideias.",
            
                action: "Entrar em contato"
            },
            maturity: {
                title:
                    "Estágios de maturidade",
    
                description:
                    "Sistema utilizado para indicar o momento atual de evolução de cada projeto dentro do ecossistema Sophia.Plant.",
    
                seed:
                    "Planejamento, pesquisa e definição dos objetivos iniciais do projeto.",
    
                sprout:
                    "Desenvolvimento ativo, testes iniciais e validação das primeiras versões.",
    
                flower:
                    "Solução concluída, documentada e pronta para receber melhorias futuras.",
            },
        },
    
        accessibility: {
            tag: "06 - Acessibilidade",
            title:
                "Cuidado que inclui pessoas",
            subtitle:
                "Acessibilidade é requisito do sistema.",
    
            perceivable: "Perceptível",
            operable: "Operável",
            understandable: "Compreensível",
            robust: "Robusto",
    
            contrast: "Contraste",
            keyboard: "Navegação por Teclado",

            keyboardDescription:
                "Todos os elementos principais da navegação podem ser acessados e utilizados apenas com teclado."
            },
        
            footer: {
                title: "Um sistema nunca está terminado.",
                description:
                    "Cada novo componente deve existir porque resolve um problema real, comunica algo importante e mantém a experiência consistente.",
                back: "Voltar ao Início"
            },

        },
        navigation: {
            greenhouse: "Estufa",
            home: "Home",
            about: "Sobre",
            projects: "Projetos",
            experiences: "Experiências",
            contact: "Contato"
        },
        lang: {label: "PT"}, //O que o botão mostra ao clicar
        maturity: {seed: "Semente", sprout: "Broto", flower:"Flor"},
    };
export default pt;
