export default function TeamIdMembersIdPage({teamId, memberId}: {
  teamId: string;
  memberId: string;
}) 
{

  return (
    <div>
      <h1>
        Информация об участнике {memberId} в команде {teamId}
      </h1>
    </div>
  );
}
