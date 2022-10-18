import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoApp_MSY1126 from './TodoApp_MSY1126';

describe('<TodoApp_MSY1126/>', () => {
    it ('renders TodoForm TodoList', () => {
        // getByTestId : list .....확인용
        const {getByText, getByTestId } = render(<TodoApp_MSY1126/>);
        getByText('등록');  // TodoForm 화면에 있는지 확인
        getByTestId('TodoList');  // TodoList 화면에 있는지 확인
    });
    it('renders two default todos', () => {
        const {getByText} = render(<TodoApp_MSY1126 />);
        getByText('TDD 배우기');
        getByText('react-testing-library');
    });
});