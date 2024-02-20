import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CodeText, CustomBox, Logo, MessageParagraph, Wrapper } from './PageNotFoundStyled';
import LogoIcon from '../../assets/images/logo.png';
import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Container maxWidth="sm">
        <CustomBox>
          <Logo src={LogoIcon} onClick={() => navigate('/')} />
          <CodeText>PAGE NOT FOUND</CodeText>
          <MessageParagraph>
            The link you followed may be broken, or the page may have been removed.
          </MessageParagraph>
        </CustomBox>
      </Container>
    </Wrapper>
  );
}

export default PageNotFound;
