import MyAthlete from "@/container/myAthlete";

export default MyAthlete;

export async function getStaticProps() {
  const locale = "fa";

  return {
    props: {
      // You can get the messages from anywhere you like. The recommended pattern
      // is to put them in JSON files separated by locale (e.g. `en.json`).
      messages: (await import(`../../public/locales/${locale}/common.json`)).default,
    },
  };
}
