import { useEffect, useState } from 'react';
import { Typography, Button } from '@mui/material';
import { BlogginPanaIllustration } from 'assets/illustration';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { getUserInfo } from '@services/user/getUserInfo';
import { DahsboardCardWelcomeContainer } from './styles';

const DahsboardCardWelcome = () => (
  <DahsboardCardWelcomeContainer>
    <div className="card-bg" />
    <div className="content-contaienr">
      <div className="card-ctr-dash">
        <Typography
          variant="h1"
          sx={{
            fontSize: '2rem',
            color: '#fff',
            lineHeight: '150%',
            fontWeight: '400',
          }}
        >
          Bem vindo
          <span style={{ fontWeight: '700' }}>!</span>
        </Typography>
        <Button sx={{ textTransform: 'none' }} className="btn-card-ctr">
          <SaveAltIcon /> Exportar dados Dash
        </Button>
      </div>
      <Typography
        variant="body1"
        sx={{ fontSize: '1.26rem', color: '#fff', lineHeight: '150%' }}
      >
        O E-redattor é o seu espaço único para gerenciar as escritas dos seus
        projetos jornalisticos, com diversos colunistas e validadores
        trabalhando em tempo real.
      </Typography>
    </div>
    <div className="illustration-blog">
      <BlogginPanaIllustration />
    </div>
  </DahsboardCardWelcomeContainer>
);

export default DahsboardCardWelcome;
