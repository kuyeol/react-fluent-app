

import Buttons from '../ui/common/Buttons';
import {
  Dialog,
  tokens,
  DialogTrigger,
  DialogSurface,
  makeStyles,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  createPresenceComponent,
  motionTokens,
  Persona,
  Field,
  SearchBox,
} from "@fluentui/react-components";
import { Accordion, AccordionHeader, AccordionItem, AccordionPanel, Button } from '@fluentui/react-components';
import {  AccessTimeFilled, PersonRegular } from "@fluentui/react-icons";
import {
   DismissSquareRegular,
   AddSquareMultiple24Filled,
  } from '@fluentui/react-icons';
import { List, ListItem } from '@fluentui/react-list-preview';
  
const useStyles = makeStyles({
  root: {
    display: "flex",
    //flexDirection: "column",
  },
  fieldWrapper: {
    padding: `${tokens.spacingVerticalMNudge} ${tokens.spacingHorizontalMNudge}`,
  margin: "10px",
maxWidth:"150px",

},
  wrapper: {
    margin: "1px",
    padding: "1px",
    display: "flex",
    gap: "1px",
  },
});


const RadialBackdropMotion = createPresenceComponent(() => {
  const keyframes = [
    {
      opacity: 0,
      background:"radial-gradient(circle at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
      transform: "scale(0)",
    },
    {
      opacity: 1.6,
      background:"radial-gradient(circle at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
      transform: "scale(1.68)",
    },
  ];

  return {
    enter: {
      keyframes: keyframes,
      easing: motionTokens.curveDecelerateMax,
      duration: motionTokens.durationGentle,
    },
    exit: {
      keyframes: [...keyframes].reverse(),
      easing: motionTokens.curveAccelerateMax,
      duration: motionTokens.durationGentle,
    },
  };
});


type Item = {
  name: string;
  id: string;
  avatar: string;
};

const items: Item[] = [
  "Melda Bevel",
  "Demetra Manwaring",
  "Eusebia Stufflebeam",
  "Israel Rabin",
  "Bart Merrill",
  "Sonya Farner",
].map((name) => ({
  name,
  id: name,
  avatar:
    "https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-react-assets/persona-male.png",
}));



interface Props {
  message: string;
}

const Print: React.FC<Props> = ({ message }) => {
  const classes = useStyles();
  const defaultSelectedItems = ["Demetra Manwaring", "Bart Merrill"];
  const styles = useStyles();
  return (
    <div>
 
      <div>
        <h1>{message}</h1>
        <DismissSquareRegular /> <List
      selectionMode="multiselect"
      defaultSelectedItems={defaultSelectedItems}
      aria-label="People example"
    >
      {items.map(({ name, avatar }) => (
        <ListItem
          key={name}
          value={name}
          aria-label={name}
          checkmark={{ "aria-label": name }}
        >
          <Persona
            name={name}
            secondaryText="Available"
            presence={{ status: "available" }}
            avatar={{
              image: {
                src: avatar,
              },
            }}
          />
        </ListItem>
      ))}
    </List>
      <Buttons name="버튼" />
      <Field
        className={styles.fieldWrapper}
        label="Search by name"
        hint={
          <>
            A SearchBox with a custom icon in the <code>contentBefore</code>{" "}
            slot.
          </>
        }
      >
        <SearchBox contentBefore={<PersonRegular />} />
      </Field>


      <AddSquareMultiple24Filled />
      <div className={classes.wrapper}>
      <AccessTimeFilled
        aria-label="An AccessTimeFilled (32px size) icon"
        fontSize="32px"
      />
      <Dialog>
        <DialogTrigger disableButtonEnhancement>
          <Button>Backdropper</Button>
        </DialogTrigger>
        <DialogSurface
          backdropMotion={{
            children: (_, props) => (
              <RadialBackdropMotion {...props}>
                {props.children}
              </RadialBackdropMotion>
            ),
          }}
        >
          <DialogBody>
            <DialogTitle>Backdroper</DialogTitle>
            <DialogContent>Customized dimmed background motion</DialogContent>
            <DialogActions>
              <DialogTrigger disableButtonEnhancement>
                <Button appearance="secondary">Close</Button>
              </DialogTrigger>
              <Button appearance="primary">Do Something</Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </div>




 <Accordion>
  <AccordionItem value="1">
    <AccordionHeader>Accordion Header 1</AccordionHeader>
    <AccordionPanel>
      <div>Accordion Panel 1</div>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem value="2">
    <AccordionHeader>Accordion Header 2</AccordionHeader>
    <AccordionPanel>
      <div>Accordion Panel 2</div>
    </AccordionPanel>
    <AccordionPanel>
      <div>Accordion Panel 2</div>
    </AccordionPanel>

  </AccordionItem>

  <AccordionItem value="3">
    <AccordionHeader>Accordion Header 3</AccordionHeader>
    <AccordionPanel>
      <div>Accordion Panel 3</div>
    </AccordionPanel>
  </AccordionItem>
</Accordion>



      </div>
<p>[End]</p>
    </div>
  );
};


export default Print;


// export default function Print() {


//   return (
//     <div>
//       <Buttons name="dddd" />
//     </div>
//   );

// }
