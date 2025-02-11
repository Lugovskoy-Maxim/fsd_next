
export default function Index({
  params,
}: {
  params: { teamId: string};
}) {
  return (
    <div>
      <h1>Страница команды {params.teamId}</h1>
    </div>
  );
}