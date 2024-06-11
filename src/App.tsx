import styled from 'styled-components';
import './App.css';
import { Flex } from './style/style';
import BlockConvert from './components/ui/BlockConvert';
import { useState } from 'react';
// https://v6.exchangerate-api.com/v6/daff82882d3f7cf4d019916b/latest/

const StyledBlockConvert = styled(BlockConvert)`
  flex: 0 1 50%;
`;
const StyledFlexGap = styled(Flex)`
  column-gap: 30px;
`;

export type objBtnConvertType = {
  isActive: string;
  setIsActive: (actvBtn: string) => void;
};

const App: React.FC = () => {
  const [isCurrentActive, setIsCurrentActive] = useState<string>('RU');
  const [isEditActive, setIsEditActive] = useState<string>('RU');

  const currentDataConvert = {
    isActive: isCurrentActive,
    setIsActive: (actvBtn: string) => setIsCurrentActive(actvBtn),
  };
  const editDataConvert = {
    isActive: isCurrentActive,
    setIsActive: (actvBtn: string) => setIsEditActive(actvBtn),
  };

  return (
    <StyledFlexGap>
      <StyledBlockConvert
        objBtnConvert={currentDataConvert}
        isActive={isCurrentActive}
      />
      <StyledBlockConvert
        objBtnConvert={editDataConvert}
        isActive={isEditActive}
      />
    </StyledFlexGap>
  );
};

export default App;
