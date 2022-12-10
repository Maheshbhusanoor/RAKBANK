import {LandingPage} from '../LandingPage';
import { render } from 'react-native-testing-library'

// beforeEach(jest.clearAllMocks)
describe('Landing Page', () => {
    it('Render Landing Page', async () => {
          const tree = render(<LandingPage />)

          expect(tree).toMatchSnapshot()
    });
});
