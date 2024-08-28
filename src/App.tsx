import {
  Container,
  Footer,
  Header,
  Heading1,
  Heading2,
  Hyperlink,
  List,
  ListItem,
  Section,
} from "@natsuneko-laboratory/ui";

function App() {
  return (
    <div className="grid min-h-[100dvh] grid-cols-1 grid-rows-[auto_1fr_auto] text-neutral-200">
      <Header
        href="/"
        brand={{
          title: "Floating Island MC",
          alt: "Natsuneko Laboratory",
          height: 36,
          width: 36,
          src: {
            dark: "https://media.natsuneko.cat/logo.png",
            light: "https://media.natsuneko.cat/logo.png",
          },
        }}
      />
      <main className="pt-6">
        <Container>
          <Heading1>Floating Island Minecraft Server</Heading1>

          <Section>
            <Heading2>Requirements</Heading2>
            <List t="unordered">
              <ListItem>Minecraft Java Edition 1.12.2</ListItem>
              <ListItem>Minecraft Forge 1.12.2-14.23.5.2859</ListItem>
              <ListItem>Floating Island Revived 2024</ListItem>
            </List>
          </Section>

          <Section>
            <Heading2>Downloads</Heading2>
            <p>
              Download Floating Island Revived 2024 from the following websites:
              <List t="unordered">
                <ListItem>
                  <Hyperlink href="https://github.com/natsuneko-laboratory/FloatingIsland">
                    GitHub
                  </Hyperlink>
                </ListItem>
                <ListItem>
                  <Hyperlink href="https://www.curseforge.com/minecraft/mc-mods/floating-island-revived">
                    CurseForge
                  </Hyperlink>
                </ListItem>
                <ListItem>
                  <Hyperlink href="https://modrinth.com/mod/floating-island-revived">
                    Modrinth
                  </Hyperlink>
                </ListItem>
              </List>
            </p>
          </Section>
        </Container>
      </main>
      <Footer
        logo={{
          dark: "https://media.natsuneko.cat/natsuneko-laboratory-dark.png",
          light: "https://media.natsuneko.cat/natsuneko-laboratory-light.png",
          height: 1217 / 2,
          width: 359 / 2,
        }}
      />
    </div>
  );
}

export default App;
