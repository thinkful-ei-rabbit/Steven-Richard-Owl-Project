import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

describe('<App />', () => {
    it('renders without crashing', () => {
        // Create a DOM element to render the component into
        const root = document.createElement('root');

        // Render the component
        // If something is wrong it will fail here
        ReactDOM.render(<App />, root);

        // Clean up
        ReactDOM.unmountComponentAtNode(root);
    });
});

describe('<App />', () => {
    it('renders this UI as expected', () => {
        // Render the component, as JSON
        const tree = renderer.create(<App />).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });
});