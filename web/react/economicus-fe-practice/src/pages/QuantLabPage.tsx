import styled from "styled-components";

import ComparativeStockSelect from "../components/ComparativeStockSlect";
import TermSelect from "../components/TermSelct";

const MainContainer = styled.div`
  border: 3px solid black;
  margin: 5px;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 30px;
`;

const GraphContainer = styled.div`
  border: 3px solid blue;
  margin: 5px;
  width: 50%;
  margin-right: 5px;
`;
const GraphSlectContainer = styled.div`
  border: 3px solid black;
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
  margin-left: 5px;
`;

const ShowQuantModelYieldContainer = styled.div`
  border: 3px solid black;
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
            <div>
              <ComparativeStockSelect />
              <TermSelect />
            </div>
          </GraphSlectContainer>
          <Graph>GGGGG</Graph>
        </GraphContainer>
        <ModelContainer>MMMMMMMM</ModelContainer>
      </MakeModelContainer>
      <ShowQuantModelYieldContainer>YYYYYYYY</ShowQuantModelYieldContainer>
    </MainContainer>
  );
};

export default QuantLabPage;
