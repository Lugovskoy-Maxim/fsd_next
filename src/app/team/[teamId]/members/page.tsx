import TeamIdMemberPage from "@/pages/team/[teamId]/members/page";

export default function Index({
  params,
}: {
  params: { teamId: string};
}) {
  return (
    <TeamIdMemberPage teamId={params.teamId} />
  );
}