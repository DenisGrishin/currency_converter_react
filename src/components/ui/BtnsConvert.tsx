import styled from 'styled-components';
import { objBtnConvertType } from '../../App';
const Button = styled.button<{
  isActive: string;
  name: string;
}>`
  background-color: #fff;
  border: 1px solid #7a7a7a;
  border-right: none;
  flex: 0 1 33.333%;
  padding: 12px 8px;

  background-color: ${({ isActive, name }) => {
    return isActive === name ? '#16b67f' : '';
  }};
  color: ${({ isActive, name }) => {
    return isActive === name ? '#fff' : '';
  }};
  transition: all 0.3s ease 0s;
  &:last-child {
    border-right: 1px solid #7a7a7a;
    border-radius: 0 4px 4px 0;
  }
  &:first-child {
    border-radius: 4px 0 0 4px;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

type BtnsConvertProps = {
  objBtnConvert: objBtnConvertType;
  isActive: string;
};

const dataBtn = [
  { name: 'RU', id: 0 },
  { name: 'EUR', id: 1 },
  { name: 'USD', id: 2 },
];

export const BtnsConvert: React.FC<BtnsConvertProps> = ({
  objBtnConvert,
  isActive,
}) => {
  return (
    <Container>
      {dataBtn.map((it) => (
        <Button
          onClick={() => objBtnConvert.setIsActive(it.name)}
          key={it.id}
          isActive={isActive}
          name={it.name}
        >
          {it.name}
        </Button>
      ))}
    </Container>
  );
};
