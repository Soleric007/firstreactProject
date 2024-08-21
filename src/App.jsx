import Header from "./components/Header";
import { CORE_CONCEPTS, EXAMPLES } from "./data"
import CoreConcepts from './components/CoreConcepts'
import TabButton from "./components/TabButton";
import { useState } from "react";
function App() {

  const [selectedTopic, setSelectedTopic] = useState(false)

  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {
              CORE_CONCEPTS.map(concept => {
                return <CoreConcepts

                  key={concept.title}
                  image={concept.image}
                  title={concept.title}
                  description={concept.description}
                />
              })
            }

          </ul>
        </section>

        <section id="examples">
          <h2>
            Examples
          </h2>

          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => setSelectedTopic('components')}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => setSelectedTopic('props')}>
              Props
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => setSelectedTopic('jsx')}>
              JSX
            </TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => setSelectedTopic('state')}>
              State
            </TabButton>
          </menu>

          {
            selectedTopic ? (
              <div id="tab-content">
              
                <h3>
                  {EXAMPLES[selectedTopic].title}
                </h3>
                <p>
                {EXAMPLES[selectedTopic].description}
                </p>
                <pre>
                  <code>
                  {EXAMPLES[selectedTopic].code}
                  </code>
                </pre>
              </div>
            ) : (
              <p>Please select a topic</p>
            )
            }


        </section>

        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
