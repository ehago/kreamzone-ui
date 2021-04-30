import styled, { css } from 'styled-components';

interface IProps {
  label: string;
  type: 'text' | 'password';
  placeholder?: string;
  error: boolean;
  errorMessage: string;
}

function InputBox({ label, type, placeholder, errorMessage, error }: IProps) {
  return (
    <StyledInputBox>
      <Label error={error}>{label}</Label>
      <div className="input-wrapper">
        <Input type={type} placeholder={placeholder} error={error} />
      </div>
      <ErrorMessage error={error}>{errorMessage}</ErrorMessage>
    </StyledInputBox>
  );
}

const StyledInputBox = styled.div`
  position: relative;
  padding: 10px 0 14px;

  .label {
    font-size: 13px;
    letter-spacing: -0.07px;
    line-height: 18px;
  }

  .input-wrapper {
    position: relative;
  }
`;

const Label = styled.h3<{ error: boolean }>`
  font-size: 13px;
  letter-spacing: -0.07px;
  line-height: 18px;
  color: ${(props) => (props.error ? '#f15746' : 'black')};
`;

const Input = styled.input<{ error: boolean }>`
  outline: 0;
  border: 0;
  resize: none;
  border-radius: 0;
  -webkit-appearance: none;
  background-color: rgba(0, 0, 0, 0);
  padding-right: 30px;
  height: 38px;
  padding: 8px 0;
  width: 100%;
  font-size: 15px;
  letter-spacing: -0.15px;
  line-height: 22px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => (props.error ? '#f15746' : '#ebebeb')};

  &:focus {
    padding-bottom: 7px;
    border-bottom: 2px solid #333;
    &::placeholder {
      visibility: hidden;
    }
  }
`;

const ErrorMessage = styled.p<{ error: boolean }>`
  ${(props) => {
    if (props.error) {
      return css`
        visibility: visible;
      `;
    } else {
      return css`
        visibility: hidden;
      `;
    }
  }}

  position: absolute;
  line-height: 16px;
  font-size: 11px;
  color: #f15746;
`;

export default InputBox;
