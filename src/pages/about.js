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
                Meu nome é Bruno Nogueira e este blog foi criado a partir do curso de Gatsby do Willian Justen na Udemy.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus purus ut nunc laoreet, vitae elementum velit egestas. Quisque magna dui, tempor in consectetur sit amet, ultrices in ante. Nam magna justo, ultrices vel libero id, euismod fermentum sapien. Nunc vitae leo eget turpis interdum blandit. In fermentum faucibus lacus sollicitudin vulputate. Mauris lectus ex, elementum vitae venenatis et, vestibulum et sapien. In arcu urna, blandit vitae cursus ac, tincidunt nec tortor. Nulla et lectus eget dolor congue accumsan in non arcu. Nullam vitae nisi congue, fermentum dolor vel, iaculis eros. Donec aliquam, enim in lobortis rhoncus, nibh tortor pharetra purus, et venenatis sapien odio nec lorem. Nam ac rutrum eros, sit amet maximus erat. Proin vehicula, tellus at facilisis faucibus, augue leo consequat dolor, dictum tempus ipsum massa in sapien.
            </p>
            <p>
                Sed nec efficitur lacus. Sed blandit a libero vitae ultrices. Nam molestie tempus egestas. Vestibulum rhoncus vel massa a venenatis. Integer quis odio ut velit sagittis condimentum sed in lorem. Vivamus ac libero ac neque ornare fringilla. Proin urna sapien, dignissim eu mattis eu, fringilla sit amet urna. Etiam ac tincidunt sapien. Vivamus vulputate odio ac hendrerit posuere. Donec sapien enim, fermentum in scelerisque vitae, ultricies et sapien. Aliquam dictum justo nec eleifend cursus. In non dui molestie, sollicitudin lacus et, dignissim erat. Vestibulum vestibulum ligula ac rutrum aliquet. Duis ex lorem, tincidunt sed felis vel, volutpat rutrum sem.
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