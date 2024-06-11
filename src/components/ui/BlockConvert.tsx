// type propsBlockConvert = {};
import styled from 'styled-components';
import { BtnsConvert } from './BtnsConvert';
import { objBtnConvertType } from '../../App';
// : React.FC<propsBlockConvert>

// const Container = styled.div`
//   max-width: 500px;
// `;
const Input = styled.input`
  width: 100%;
  padding: 30px 20px 30px;
  border: 1px solid #cdcdcd;
  font-size: 20px;
`;
type BtnsConvertProps = {
  className?: string;
  objBtnConvert: objBtnConvertType;
  isActive: string;
};

const BlockConvert: React.FC<BtnsConvertProps> = ({
  className,
  objBtnConvert,
  isActive,
}) => {
  return (
    <div className={className}>
      <BtnsConvert objBtnConvert={objBtnConvert} isActive={isActive} />
      <Input type="text" />
    </div>
  );
};
export default BlockConvert;
