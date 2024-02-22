// SearchBar.tsx
import React, { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';

interface SearchBarProps {
	query: string;
	onChange: (query: string) => void;
	loading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onChange, loading }) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};

	return (
		<TextField
			type='search'
			InputProps={{
				startAdornment: (
					<Stack direction={'row'}>
						<Stack justifyContent={'center'} alignItems={'center'} sx={{ backgroundColor: '#170058', height: '52px', width: '52px', borderRadius: '8px 0px 0px 8px', cursor: 'pointer' }}>
							<SearchIcon sx={{ color: 'white' }} />
						</Stack>
					</Stack>
				),
				endAdornment: (
					<>
						{loading && (
							<Stack direction={'row'} p={1}>
								<CircularProgress color='primary' size={20} />
							</Stack>
						)}
					</>
				),
				style: { padding: 0 },
			}}
			value={query}
			onInput={handleChange}
			id='proxy-search'
			placeholder='Type a job title or skill and location '
			variant='outlined'
			name='proxy-search'
			sx={{
				'.MuiOutlinedInput-input': {
					paddingRight: '8px',
					paddingLeft: '8px',
				},
			}}
		/>
	);
};

export default SearchBar;
