import { Checkbox, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

import ContentCard from "../components/ContentCard";
import OrderSelect from "../components/OrderSelct";
import TermSelect from "../components/TermSelct";

const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubContainer = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
`;

const MainContainer = styled.div`
  padding-left: 10%;
  padding-right: 10%;
`;

const MainPage = () => {
  return (
    <div>
      <MainContainer>
        <SubContainer>
          <OrderSelect />
          <TermSelect />
          <Typography variant="h6" component="div" sx={{ m: 4 }}>
            subscribed
            <Checkbox />
          </Typography>
          <Typography variant="h6" component="div" sx={{ m: 4 }}>
            테스트 포함
            <Checkbox />
          </Typography>
        </SubContainer>
        <ContentsContainer>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
          </Box>
        </ContentsContainer>
      </MainContainer>
    </div>
  );
};

export default MainPage;
