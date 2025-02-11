export default function TeamIdMemberPage({
  teamId,
}: {
  teamId: string;
}) {
  return (
    <div>
      <h1>
        Информация об участниках в команде {teamId}
      </h1>
    </div>
  );
}