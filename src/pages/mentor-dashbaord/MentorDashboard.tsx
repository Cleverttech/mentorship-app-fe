import {
	Box,
	Typography,
	Grid,
	Card,
	CardContent,
	Divider,
	List,
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	Stack,
	Chip,
} from "@mui/material";
import { mockMentorDashboard } from "../../mocks/mockMentorDashboardData";

export default function MentorDashboard() {
	return (
		<Box sx={{ p: 4 }}>
			<Typography variant="h4" gutterBottom>
				Welcome back, {mockMentorDashboard.mentorName}
			</Typography>

			{/* Stats */}
			<Grid container spacing={3} sx={{ mb: 4 }}>
				{Object.entries(mockMentorDashboard.stats).map(([key, value]) => (
					<Grid size={{ xs: 12, sm: 4 }} key={key}>
						<Card>
							<CardContent>
								<Typography variant="subtitle2" color="textSecondary">
									{key.replace(/([A-Z])/g, " $1")}
								</Typography>
								<Typography variant="h5">{value}</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>

			<Grid container spacing={3}>
				{/* Upcoming Sessions */}
				<Grid size={{ xs: 12, md: 6 }}>
					<Card>
						<CardContent>
							<Typography variant="h6">Upcoming Sessions</Typography>
							<Divider sx={{ my: 1 }} />
							<List>
								{mockMentorDashboard.upcomingSessions.map((session) => (
									<ListItem key={session.id} alignItems="flex-start">
										<ListItemText
											primary={`${session.topic} with ${session.menteeName}`}
											secondary={
												<>
													<Typography variant="body2" color="textSecondary">
														{session.date} at {session.time} –{" "}
														{session.creditsBooked} credits
													</Typography>
													<Stack
														direction="row"
														spacing={1}
														mt={1}
														flexWrap="wrap"
													>
														{session.skills.map((skill) => (
															<Chip
																key={`${session.id}-${skill}`}
																label={skill}
																size="small"
															/>
														))}
													</Stack>
												</>
											}
										/>
									</ListItem>
								))}
							</List>
						</CardContent>
					</Card>
				</Grid>

				{/* Active Mentees */}
				<Grid size={{ xs: 12, md: 6 }}>
					<Card>
						<CardContent>
							<Typography variant="h6">Active Mentees</Typography>
							<Divider sx={{ my: 1 }} />
							<List>
								{mockMentorDashboard.activeMentees.map((mentee) => (
									<ListItem key={mentee.id}>
										<ListItemAvatar>
											<Avatar alt={mentee.name} src={mentee.avatar} />
										</ListItemAvatar>
										<ListItemText
											primary={mentee.name}
											secondary={`Joined on ${mentee.joined}`}
										/>
									</ListItem>
								))}
							</List>
						</CardContent>
					</Card>
				</Grid>

				{/* Recent Articles */}
				<Grid size={{ xs: 12 }}>
					<Card>
						<CardContent>
							<Typography variant="h6">Recent Articles</Typography>
							<Divider sx={{ my: 1 }} />
							<List>
								{mockMentorDashboard.recentArticles.map((article: any) => (
									<ListItem key={article.id}>
										<ListItemText
											primary={article.title}
											secondary={`Published on ${article.date}`}
										/>
									</ListItem>
								))}
							</List>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
}
