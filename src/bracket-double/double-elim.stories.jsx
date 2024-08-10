import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import useWindowSize from 'Hooks/use-window-size';
import styled from 'styled-components';
import Match from 'Components/match';
import noPartyMockData from '../mock-data/data-double-no-show';
import lastGameInLowerMockData from '../mock-data/data-double-last-game-lower';
import lastGameInUpperMockData from '../mock-data/data-double-last-game-upper-double-playoffs';
import DoubleElimBracketLeaderboard from './double-elim-bracket';
import SvgViewer from '../svg-viewer';
import simpleDoubleFull from '../mock-data/simple-double-full';
import simpleDouble from '../mock-data/simple-data-double';

export default {
  title: 'Components/DoubleElim',
  component: DoubleElimBracketLeaderboard,
};

const StyledSvgViewer = styled(SvgViewer).attrs(props => {
  return {
    background: props.theme.canvasBackground,
    SVGBackground: props.theme.canvasBackground,
  };
})``;

export function DoubleElimination() {
  const [width, height] = useWindowSize();
  const finalWidth = Math.max(width - 50, 500);
  const finalHeight = Math.max(height - 100, 500);
  return (
    <DoubleElimBracketLeaderboard
      matches={simpleDoubleFull}
      matchComponent={Match}
      svgWrapper={({ children, ...props }) => (
        <StyledSvgViewer width={finalWidth} height={finalHeight} {...props}>
          {children}
        </StyledSvgViewer>
      )}
    />
  );
}

export function DoubleEliminationBig() {
  const [width, height] = useWindowSize();
  const finalWidth = Math.max(width - 50, 500);
  const finalHeight = Math.max(height - 100, 500);
  return (
    <DoubleElimBracketLeaderboard
      matches={simpleDouble}
      matchComponent={Match}
      svgWrapper={({ children, ...props }) => (
        <StyledSvgViewer width={finalWidth} height={finalHeight} {...props}>
          {children}
        </StyledSvgViewer>
      )}
    />
  );
}

export function DoubleEliminationNoParty() {
  const [width, height] = useWindowSize();
  const finalWidth = Math.max(width - 50, 500);
  const finalHeight = Math.max(height - 100, 500);
  return (
    <DoubleElimBracketLeaderboard
      matches={noPartyMockData}
      matchComponent={Match}
      svgWrapper={({ children, ...props }) => (
        <StyledSvgViewer width={finalWidth} height={finalHeight} {...props}>
          {children}
        </StyledSvgViewer>
      )}
    />
  );
}

export function DoubleEliminationDoubleFinalsLastGamesInLower() {
  const [width, height] = useWindowSize();
  const finalWidth = Math.max(width - 50, 500);
  const finalHeight = Math.max(height - 100, 500);
  return (
    <DoubleElimBracketLeaderboard
      matches={lastGameInLowerMockData}
      matchComponent={Match}
      svgWrapper={({ children, ...props }) => (
        <StyledSvgViewer width={finalWidth} height={finalHeight} {...props}>
          {children}
        </StyledSvgViewer>
      )}
    />
  );
}

export function DoubleEliminationDoubleFinalsLastGamesInUpper() {
  const [width, height] = useWindowSize();
  const finalWidth = Math.max(width - 50, 500);
  const finalHeight = Math.max(height - 100, 500);
  return (
    <DoubleElimBracketLeaderboard
      matches={lastGameInUpperMockData}
      matchComponent={Match}
      svgWrapper={({ children, ...props }) => (
        <StyledSvgViewer width={finalWidth} height={finalHeight} {...props}>
          {children}
        </StyledSvgViewer>
      )}
    />
  );
}

const communityBugBracketData = {
  upper: [
    {
      id: 1,
      name: '1',
      nextMatchId: 50000,
      nextLooserMatchId: 501,
      tournamentRoundText: '3',
      state: 'SCHEDULED',
      participants: [],
    },
    {
      id: 2,
      name: '2',
      nextMatchId: 1,
      tournamentRoundText: '2',
      state: 'RUNNING',
      participants: [
        {
          id: '60f8d51a-1dff-428c-a490-1fa0aeea222f',
          isWinner: false,
          status: 'SCHEDULED',
          name: 'testuser0',
        },
        {
          id: 'fd061925-f4db-4d40-8b49-4ae0f5bd7f77',
          isWinner: false,
          status: 'SCHEDULED',
          name: 'testuser1',
        },
      ],
      nextLooserMatchId: 502,
    },
    {
      id: 3,
      name: '3',
      nextMatchId: 1,
      tournamentRoundText: '2',
      state: 'SCHEDULED',
      participants: [
        {
          id: '85738d91-638d-443e-9322-076b6491bb6a',
          isWinner: false,
          status: 'SCHEDULED',
          name: '$asd&',
        },
        {
          id: '16d1e6ff-d944-4146-b3a7-01e3b29f15c9',
          isWinner: false,
          status: 'SCHEDULED',
          name: 'testuser2',
        },
      ],
      nextLooserMatchId: 503,
    },
    {
      id: 4,
      name: '4',
      nextMatchId: 2,
      tournamentRoundText: '3',
      state: 'DONE',
      participants: [
        {
          id: 'b7e8ba28-8f35-44dc-ae78-47d4e32077ae',
          resultText: 'LOST',
          isWinner: false,
          status: 'DONE',
          name: 'testuser3',
        },
        {
          id: '60f8d51a-1dff-428c-a490-1fa0aeea222f',
          resultText: 'WON',
          isWinner: true,
          status: 'DONE',
          name: 'testuser0',
        },
      ],
      nextLooserMatchId: 504,
    },
    {
      id: 5,
      name: '5',
      nextMatchId: 2,
      tournamentRoundText: '3',
      startTime: '2024-04-16T04:22:36.9686208Z',
      state: 'DONE',
      participants: [
        {
          id: 'fd061925-f4db-4d40-8b49-4ae0f5bd7f77',
          resultText: 'WON',
          isWinner: true,
          status: 'DONE',
          name: 'testuser1',
        },
        {
          id: '00000000-0000-0000-0000-000000000000',
          isWinner: false,
          name: 'BYE',
        },
      ],
      nextLooserMatchId: 504,
    },
    {
      id: 6,
      name: '6',
      nextMatchId: 3,
      tournamentRoundText: '3',
      startTime: '2024-04-16T04:22:36.9686298Z',
      state: 'DONE',
      participants: [
        {
          id: '16d1e6ff-d944-4146-b3a7-01e3b29f15c9',
          resultText: 'WON',
          isWinner: true,
          status: 'DONE',
          name: 'testuser2',
        },
        {
          id: '00000000-0000-0000-0000-000000000000',
          isWinner: false,
          name: 'BYE',
        },
      ],
      nextLooserMatchId: 505,
    },
    {
      id: 7,
      name: '7',
      nextMatchId: 3,
      tournamentRoundText: '3',
      startTime: '2024-04-16T04:22:36.9686311Z',
      state: 'DONE',
      participants: [
        {
          id: '85738d91-638d-443e-9322-076b6491bb6a',
          resultText: 'WON',
          isWinner: true,
          status: 'DONE',
          name: '$asd&',
        },
        {
          id: '00000000-0000-0000-0000-000000000000',
          isWinner: false,
          name: 'BYE',
        },
      ],
      nextLooserMatchId: 505,
    },
  ],
  lower: [
    {
      id: 50000,
      name: 'Final',
      tournamentRoundText: 'Final',
      state: 'SCHEDULED',
      participants: [],
    },
    {
      id: 501,
      name: '1',
      nextMatchId: 50000,
      tournamentRoundText: '1',
      state: 'SCHEDULED',
      participants: [],
    },
    {
      id: 502,
      name: '2',
      nextMatchId: 501,
      tournamentRoundText: '2',
      state: 'SCHEDULED',
      participants: [],
    },
    {
      id: 503,
      name: '3',
      nextMatchId: 501,
      tournamentRoundText: '2',
      state: 'SCHEDULED',
      participants: [],
    },
    {
      id: 504,
      name: '4',
      nextMatchId: 502,
      tournamentRoundText: '3',
      state: 'SCHEDULED',
      participants: [],
    },
    {
      id: 505,
      name: '5',
      nextMatchId: 503,
      tournamentRoundText: '3',
      state: 'SCHEDULED',
      participants: [],
    },
  ],
};

export function CommunityBugBracket() {
  const [width, height] = useWindowSize();
  const finalWidth = Math.max(width - 50, 500);
  const finalHeight = Math.max(height - 100, 500);
  return (
    <DoubleElimBracketLeaderboard
      matches={communityBugBracketData}
      matchComponent={Match}
      svgWrapper={({ children, ...props }) => (
        <StyledSvgViewer width={finalWidth} height={finalHeight} {...props}>
          {children}
        </StyledSvgViewer>
      )}
    />
  );
}
