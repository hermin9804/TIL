import { Card, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import styled from "styled-components";

import Example from "../components/graph";
import ModalBusinessAreas from "../components/modals/BusinessAreas";
import ComparativeStockSelect from "../components/selecter/ComparativeStockSelect";
import TermSelect from "../components/selecter/TermSelect";
import LabSlider from "../components/slider/LabSlider";
import NumberOfStocks from "../components/slider/NumberOfStocksSlider";
import RebalancingTermSlider from "../components/slider/RebalancingTermSlider";

const MainContainer = styled.div`
  //border: 3px solid pink;
  margin: 5px;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 30px;
`;

const GraphContainer = styled(Card)`
  //border: 3px solid blue;
  margin: 5px;
  width: 50%;
`;
const GraphSlectContainer = styled.div`
  //border: 3px solid orange;
  margin: 5px;
  display: flex;
`;

const Graph = styled.div`
  //border: 3px solid green;
  margin: 5px;
  height: 300px;
  padding: 5px;
`;

const MakeModelContainer = styled.div`
  //border: 3px solid black;
  argin: 5px;
  display: flex;
`;

const ModelContainer = styled(Card)`
  //border: 3px solid red;
  margin: 5px;
  width: 50%;
`;

const ShowQuantModelYieldContainer = styled(Card)`
  //border: 3px solid yellow;
  margin: 5px;
  margin-top: 10px;
`;

export interface IBusinessArea {
  [key: string]: boolean;
}

export interface IChartInfo {
  [key: string]: boolean;
}

const QuantLabPage = () => {
  const [businessArea, setBusinessArea] = useState({
    game: true,
    enter: false,
    enter2: false,
    enter3: false,
  });
  const [rebalancingTerm, setRebalancingTerm] = useState<number | string>(1);
  const [numberOfHoldings, setNumberOfHoldings] = useState<number | string>(1);
  return (
    <MainContainer>
      <MakeModelContainer>
        <GraphContainer>
          <GraphSlectContainer>
            <ComparativeStockSelect />
            <TermSelect />
          </GraphSlectContainer>
          <Graph>
            <Example></Example>
          </Graph>
        </GraphContainer>
        <ModelContainer>
          <Container sx={{ px: "5%" }}>
            <h3>Quant Lab</h3>
            <LabSlider
              name={"???????????? ??????"}
              min={1}
              max={12}
              value={rebalancingTerm}
              setValue={setRebalancingTerm}
            />
            <LabSlider
              name={"?????? ?????? ???"}
              min={1}
              max={50}
              value={numberOfHoldings}
              setValue={setNumberOfHoldings}
            />
          </Container>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              p: 3,
            }}
          >
            {/* ????????? modal ??? ????????? ??????*/}
            <ModalBusinessAreas
              state={businessArea}
              setState={setBusinessArea}
            />
          </Box>
        </ModelContainer>
      </MakeModelContainer>
      <ShowQuantModelYieldContainer>
        <Typography>??????</Typography>
        <Typography>???????????????</Typography>
        <Typography>???????????????</Typography>
        <Typography>??????</Typography>
        <Typography>???????????????</Typography>
        <Typography>???????????????</Typography>
      </ShowQuantModelYieldContainer>
    </MainContainer>
  );
};

export default QuantLabPage;
