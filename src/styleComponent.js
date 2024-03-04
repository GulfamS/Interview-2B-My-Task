import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`
export const TaskInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #323f4b;
  height: 100vh;
  width: 35vw;
`
export const TaskDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
  background-color: #000000;
  height: 100vh;
  width: 65vw;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #f3aa4e;
  font-size: 30px;
  font-weight: bold;
  margin: 18px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
  margin: 8px;
`
export const LabelText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
`
export const Input = styled.input`
  font-family: 'Roboto';
  padding: 8px;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-bottom: 18px;
  width: 95%;
  border-radius: 4px;
`
export const Select = styled.select`
  padding: 8px;
  font-family: 'Roboto';
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  margin-bottom: 18px;
  border-radius: 4px;
`
export const AddButton = styled.button`
  font-family: 'Roboto';
  font-size: 16px;
  color: #f1f5f9;
  background-color: #f3aa4e;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px;
  padding-left: 18px;
  padding-right: 18px;
  border-radius: 5px;
`
export const TagsHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`
export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin: 8px;
  margin-top: 12px;
  margin-bottom: 12px;
`
export const TagListItem = styled.li`
  list-style-type: none;
`
export const TaskContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 5px;
`
export const NoTaskText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
  margin: 18px;
`
export const TagsButton = styled.button`
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  border: 1px solid #f3aa4e;
  border-radius: 20px;
  padding: 8px;
  padding-left: 12px;
  padding-right: 12px;
  outline: none;
  cursor: pointer;
  text-align: center;
  font-size: 18px;
  color: #ffffff;
  margin: 5px;
`
