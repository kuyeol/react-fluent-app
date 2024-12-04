import { DrawerProps } from "@fluentui/react-components";
import * as React from "react";
import {
  AppItem,
  Hamburger,
  NavCategory,
  NavCategoryItem,
  NavDivider,
  NavDrawer,
  NavDrawerBody,
  NavDrawerHeader,
  NavDrawerProps,
  NavItem,
  NavSectionHeader,
  NavSubItem,
  NavSubItemGroup,
} from "@fluentui/react-nav-preview";

import {
  Label,
  Radio,
  RadioGroup,
  Switch,
  Tooltip,
  makeStyles,
  tokens,
  useId,
} from "@fluentui/react-components";
import {
  Board20Filled,
  Board20Regular,
  BoxMultiple20Filled,
  BoxMultiple20Regular,
  DataArea20Filled,
  DataArea20Regular,
  DocumentBulletListMultiple20Filled,
  DocumentBulletListMultiple20Regular,
  HeartPulse20Filled,
  HeartPulse20Regular,
  MegaphoneLoud20Filled,
  MegaphoneLoud20Regular,
  NotePin20Filled,
  NotePin20Regular,
  People20Filled,
  People20Regular,
  PeopleStar20Filled,
  PeopleStar20Regular,
  Person20Filled,
  PersonLightbulb20Filled,
  PersonLightbulb20Regular,
  Person20Regular,
  PersonSearch20Filled,
  PersonSearch20Regular,
  PreviewLink20Filled,
  PreviewLink20Regular,
  bundleIcon,
  PersonCircle32Regular,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
    root: {
      overflow: "hidden",
      display: "flex",
      height: "600px",
    },
    content: {
      flex: "1",
      padding: "16px",
      display: "grid",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    field: {
      display: "flex",
      marginTop: "4px",
      marginLeft: "8px",
      flexDirection: "column",
      gridRowGap: tokens.spacingVerticalS,
    },
  });
  


  const Dashboard = bundleIcon(Board20Filled, Board20Regular);

  type DrawerType = Required<DrawerProps>["type"];

export const NavContainer = (props: Partial<NavDrawerProps>) => {
    const styles = useStyles();
 

    const typeLableId = useId("type-label");
    const linkLabelId = useId("link-label");
    const multipleLabelId = useId("multiple-label");
  
    const [isOpen, setIsOpen] = React.useState(true);
    const [enabledLinks, setEnabledLinks] = React.useState(true);
    const [type, setType] = React.useState<DrawerType>("inline");
    const [isMultiple, setIsMultiple] = React.useState(true);

    const linkDestination = enabledLinks ? "/" : "";


    const renderHamburgerWithToolTip = () => {
        return (
          <Tooltip content="Navigation" relationship="label">
            <Hamburger onClick={() => setIsOpen(!isOpen)} />
          </Tooltip>
        );
      };




    return (
        <div className={styles.root}>
              <NavDrawer
        defaultSelectedValue="2"
        defaultSelectedCategoryValue=""
        open={isOpen}
        type={type}
        multiple={isMultiple}
      >
        <NavDrawerHeader>{renderHamburgerWithToolTip()}</NavDrawerHeader>
        <NavDrawerBody>
        <AppItem
            icon={<PersonCircle32Regular />}
            as="a"
            href={linkDestination}
          >
            Contoso HR
          </AppItem>
          <NavItem href={linkDestination} icon={<Dashboard />} value="1">
            Dashboard
          </NavItem>
        </NavDrawerBody>
      </NavDrawer>

      <div className={styles.content}>
        {!isOpen && renderHamburgerWithToolTip()}
        <div className={styles.field}>
          <Label id={typeLableId}>Type</Label>
          <RadioGroup
            value={type}
            onChange={(_, data) => setType(data.value as DrawerType)}
            aria-labelledby={typeLableId}
          >
            <Radio value="overlay" label="Overlay (Default)" />
            <Radio value="inline" label="Inline" />
          </RadioGroup>
          <Label id={linkLabelId}>Links</Label>
          <Switch
            checked={enabledLinks}
            onChange={(_, data) => setEnabledLinks(!!data.checked)}
            label={enabledLinks ? "Enabled" : "Disabled"}
            aria-labelledby={linkLabelId}
          />

          <Label id={multipleLabelId}>Categories</Label>
          <Switch
            checked={isMultiple}
            onChange={(_, data) => setIsMultiple(!!data.checked)}
            label={isMultiple ? "Multiple" : "Single"}
            aria-labelledby={multipleLabelId}
          />
        </div>

        </div>
        </div>
    );
}