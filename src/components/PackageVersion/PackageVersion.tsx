import { useState, useEffect } from "react";

/**
 * External Imports
 */
import axios from "axios";

/**
 * Imports Material UI components
 */
import { Button, Link, Tooltip, Box } from "@material-ui/core/";

/**
 * Imports the component styles
 */
import { useStyles } from "./PackageVersion.styles";

/**
 * Defines the props interface
 */
export interface PackageVersionProps {}

/**
 * Defines the package interface
 */
interface PackageInfo {
  version: string;
  npm: string;
}

/**
 * Displays the component
 */
export const PackageVersion: React.FC<PackageVersionProps> = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Inits the package state
   */
  const [packageInfo, setPackageInfo] = useState<PackageInfo>({
    version: "1.0.0",
    npm: "https://www.npmjs.com/"
  });

  /**
   * Handles requesting the package version from NPM
   */
  const fetchPackageVersion = async () => {
    const { data } = await axios.get("https://registry.npmjs.org/-/v1/search", {
      params: {
        text: "react-material-cli"
      }
    });

    if (data) {
      const version = data.objects[0].package.version;
      const npm = data.objects[0].package.links.npm;

      setPackageInfo({ version, npm });
    }
  };

  useEffect(() => {
    fetchPackageVersion();
  }, []);

  return (
    <Box className={classes.PackageVersion}>
      <Tooltip
        title="Package Version"
        aria-label="npm-package"
        placement="bottom"
      >
        <Link target="_blank" href={packageInfo.npm}>
          <Button aria-label="npm" color="secondary" className={classes.button}>
            v{packageInfo.version}
          </Button>
        </Link>
      </Tooltip>
    </Box>
  );
};
