export default function TeamIdPage({
  teamId,
}: {
  teamId: string;
}) {
  return (
    <div>
      <h1>
        Информация о команде {teamId}
      </h1>
    </div>
  );
}