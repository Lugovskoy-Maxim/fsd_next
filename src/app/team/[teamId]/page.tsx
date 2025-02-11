import TeamIdPage from "@/pages/team/[teamId]/page";

export default function Index({
  params,
}: {
  params: { teamId: string};
}) {
  return (
    <TeamIdPage teamId={params.teamId} />
  );
}