import { Box } from "@mui/material";
import styled from "styled-components";

import ComparativeStockSelect from "../components/selecter/ComparativeStockSelect";
import TermSelect from "../components/selecter/TermSelect";
import NumberOfStocks from "../components/slider/NumberPfStocks";
import RebalancingTermSlider from "../components/slider/RebalancingTermSlider";

const MainContainer = styled.div`
  border: 3px solid pink;
  margin: 5px;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 30px;
`;

const GraphContainer = styled.div`
  border: 3px solid blue;
  margin: 5px;
  width: 50%;
`;
const GraphSlectContainer = styled.div`
  border: 3px solid orange;
  margin: 5px;
  display: flex;
`;

const Graph = styled.div`
  border: 3px solid green;
  margin: 5px;
  height: 300px;
`;

const MakeModelContainer = styled.div`
  border: 3px solid black;
  margin: 5px;
  width: 100%;
  display: flex;
`;

const ModelContainer = styled.div`
  border: 3px solid red;
  margin: 5px;
  width: 50%;
`;

const ShowQuantModelYieldContainer = styled.div`
  border: 3px solid yellow;
  margin: 5px;
  width: 100%;
  margin-top: 10px;
`;

const QuantLabPage = () => {
  return (
    <MainContainer>
      <MakeModelContainer>
        <GraphContainer>
          <GraphSlectContainer>
            <ComparativeStockSelect />
            <TermSelect />
          </GraphSlectContainer>
          <Graph>Graph</Graph>
        </GraphContainer>
        <ModelContainer>
          <Box sx={{ pr: "5%", pl: "5%" }}>
            <h3>Quant Lab</h3>
            <RebalancingTermSlider />
            <NumberOfStocks />
          </Box>
        </ModelContainer>
      </MakeModelContainer>
      <ShowQuantModelYieldContainer>YYYYYYYY</ShowQuantModelYieldContainer>
    </MainContainer>
  );
};

export default QuantLabPage;
