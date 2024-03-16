import { useQuery } from "@tanstack/react-query";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { getProfiles } from "@/services/getProfiles";

export default function ProfilesPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["profiles"],
    queryFn: getProfiles,
    refetchOnWindowFocus: true,
  });

  if (isLoading) {
    return <Container>Loading</Container>;
  }

  return (
    <Container>
      <h1>Profiles</h1>
      <ul>
        {data.map((profile) => (
          <li key={profile.id}>
            <Link href={`/profiles/${profile.id}`}>{profile.Name}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
