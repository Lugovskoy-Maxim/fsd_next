import TeamIdMembersIdPage from "@/pages/team/[teamId]/members/[memberId]/page";


export default function Index({
  params,
}: {
  params: { teamId: string; memberId: string };
}) {
  return (
    <TeamIdMembersIdPage teamId={params.teamId} memberId={params.memberId} />
  );
}