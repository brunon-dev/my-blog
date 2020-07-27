import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import SocialLinks from '../components/SocialLinks'

import * as S from '../components/Page/styled'

const AboutPage = () => (
    <Layout>
        <SEO
            title="Sobre mim"
            description="Bruno Nogueira é um programador full stack que escreve sobre os assuntos mais diversos, como desenvolvimento, investimentos e marketing."
        />
        <S.MainContent>
            <h1>Sobre mim</h1>
            <p>
                Meu nome é Bruno Nogueira e sou programador full stack interessado nos assuntos mais diversos,
                como desenvolvimento, tecnologia, investimentos, marketing, empreendedorismo, nerdices, entre outras coisas. Um dos objetivos
                do blog é refletir esses múltiplos interesses.
            </p>
            <p>
                Minha experiência profissional inclui passagens por grandes players do Mercado Financeiro, como XP, BTG Pactual e Modal, algumas das
                maiores multinacionais de tecnologia do mundo, como IBM e Unisys, e startups de destaque nos segmentos mais diversos, como Ubook e Toro
                Investimentos. Também fui co-fundador de uma empresa de consultoria em desenvolvimento apoiada em 2003/2004 pela Incubadora de Empresas do Cefet-RJ e
                fui sócio de startup selecionada na categoria Alpha para o WebSummit 2015, maior evento de tecnologia e empreendedorismo da Europa.
            </p>
            <p>
                A ideia de criar um blog para compartilhar conhecimentos e experiências surgiu com a criação de um curso com mais de 3 mil alunos em diversos países.
                Sim, também sou instrutor de curso online de tecnologia e muitos dos posts existentes aqui vão estar relacionados com conteúdo educativo de tecnologia,
                investimentos, marketing e outros assuntos que me interessam de alguma forma.
            </p>
            <h3>Contato</h3>
            <p>Caso queira entrar em contato comigo, pode usar qualquer uma das minhas redes sociais:</p>
        </S.MainContent>
        <S.SocialHeader>
            <SocialLinks />
        </S.SocialHeader>
    </Layout>
)

export default AboutPage