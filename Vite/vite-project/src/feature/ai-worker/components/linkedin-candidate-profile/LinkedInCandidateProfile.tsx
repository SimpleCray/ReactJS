import { Typography, TextField, Stack, Button, IconButton, Popper, Fade, Paper, Avatar, ImageList, ImageListItem, Checkbox } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { StyledImageList } from './LinkedInCandidateProfileStyles';
import LinkedInCandidateCard from '../candidate-card/CandidateCard';
import { searchProxyCandidate } from '../../../../constants';
import SearchBar from '../../../../components/search-bar/SearchBar';
import { LinkedinInfo } from '../../types/linkedinCandidate';
import CircularProgress from '@mui/material/CircularProgress';


function LinkedInCandidateProfile() {
	const [searchInput, setSearchInput] = useState('');
	const [candidates, setCandidates] = useState<LinkedinInfo[]>([]);
	const [tableStatus, setTableStatus] = useState<string | undefined>();
	const [hasMore, setHasMore] = useState(true);
	const [loading, setLoading] = useState(false);

	const [page, setPage] = useState(1);

	const anchorRef = useRef<null | HTMLDivElement>(null);


	useEffect(() => {
		setPage(1);
		setCandidates([]);

		if (searchInput.length > 0) {
			const timeoutId = setTimeout(() => {
				fetchProxyCandidates(searchInput, 1);
			}, 500);
			return () => clearTimeout(timeoutId);
		}
	}, [searchInput]);


	const fetchProxyCandidates = async (search: string, page: number) => {
		setLoading(true);
		const body: { search: string; page_number: number; page_size?: number } = {
			search: search,
			page_number: page,
			page_size: 100,
		};

		try {
			const response: any = await searchProxyCandidate(body);

			if (response) {
				setTableStatus(response.status);
				setHasMore(response.has_more);
				setCandidates([]);
			}

			if (response && response.status === 'SUCCESS') {
				setCandidates([...candidates, ...response?.candidates]);
			}
			setLoading(false);
			scrollIntoView();

		} catch (err) {
			console.error(err);
			setLoading(false);
		}
	};

	function openUrlInNewTab(url: string): void {
		const newTab = window.open(url, '_blank');

		if (newTab) {
			newTab.focus();
		}
	}

	const scrollIntoView = () => {
		anchorRef?.current?.scrollIntoView({
			block: 'end',
			behavior: 'instant'
		});
	};

	const nextPage = () => {
		setPage(page + 1);
		fetchProxyCandidates(searchInput, page + 1);
	};

	return (
		<>
			<Stack direction={'column'} spacing={2}>
				<Typography variant='body1'>
				Search our extensive database to find candidates with your preferred experience by skill, experience, location or more. For best results, use keywords with specifics, For example: “5 years experience, Software developer, JavaScript, Sydney”. 				</Typography>

				<SearchBar query={searchInput} onChange={setSearchInput} loading={loading} />

				{candidates?.length > 0 && tableStatus === 'SUCCESS' && (
					<>
						<Stack>
							<StyledImageList sx={{ maxHeight: 600, height: 'auto', padding: 1 }} cols={3} gap={8}>
								{candidates.map((item: any, index: number) => (
									<ImageListItem key={index}>
										<LinkedInCandidateCard candidate={item} onclick={() => openUrlInNewTab(item.linkedin_profile_url)} />
									</ImageListItem>
								))}
								<Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
									{hasMore && !loading && <Button onClick={nextPage}> Load more</Button>}
									{loading && <CircularProgress color='primary'/>}
								</Stack>
							</StyledImageList>
						</Stack>
					</>
				)}

				{tableStatus === 'NOT_FOUND' && (
					<Stack sx={{ height: 70, padding: 1, margin: 4 }} alignItems={'center'} display={'flex'} justifyContent={'center'}>
						<Typography align='center'>No results found</Typography>
					</Stack>
				)}
			</Stack>
			<div ref={anchorRef} />
		</>
	);
}

export default LinkedInCandidateProfile;
