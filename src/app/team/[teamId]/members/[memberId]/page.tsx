export default function Index({
  params,
}: {
  params: { teamId: string; memberId: string };
}) {
  return (
    <div>
      <h1>
        Информация об участнике {params.memberId} в команде {params.teamId}
      </h1>
    </div>
  );
}
