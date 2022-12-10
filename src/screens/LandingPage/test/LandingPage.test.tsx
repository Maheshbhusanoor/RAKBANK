import {LandingPage} from '../LandingPage';
import { render,act} from 'react-native-testing-library'
import { create } from 'react-test-renderer';
import { shallow } from "enzyme";

beforeEach(jest.clearAllMocks)

describe('Landing Page', () => {
    const wrapper = shallow(<LandingPage/>);

    it('Render Landing Page', async () => {
          const tree = render(<LandingPage />)

          expect(tree).toMatchSnapshot()
    });
    it('Create Landing Page', () => {
        let root
        act(() => {
            root = create(<LandingPage />) 
        })
         expect(root).toMatchSnapshot()
    })

   it('Login Button Props Validation for ', function () {
        expect(wrapper.find('Button').first().props()).toEqual({
      onPress: expect.any(Function),
      background:true,
      title:"Login with User ID"
    });
    });
 
    it('Submit Button Props Validation ', function () {
        expect(wrapper.find('Button').last().props()).toEqual({
        onPress: expect.any(Function),
        background:true,
        title:"Submit",
        disabled: true,
        loading:undefined,
        top:'4%'
        });
    });
    it('Buttons title to be defined', function () {
        wrapper.find('Button').forEach( (node) => {
        expect(node.prop('title')).toBeDefined()
        })
    });
 
});
