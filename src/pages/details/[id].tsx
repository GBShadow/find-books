import { Details } from 'components/Details';
import { useRouter } from 'next/dist/client/router';

export default function ShowDetails() {
  const router = useRouter();

  const id = router.query.id as string;

  return <Details id={id} />;
}
