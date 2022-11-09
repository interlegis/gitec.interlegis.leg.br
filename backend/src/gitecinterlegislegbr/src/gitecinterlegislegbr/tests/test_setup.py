"""Setup tests for this package."""
from gitecinterlegislegbr.testing import (
    GITECINTERLEGISLEGBR_INTEGRATION_TESTING,
)  # noqa: E501
from kitconcept import api
from plone.app.testing import setRoles
from plone.app.testing import TEST_USER_ID
from Products.CMFPlone.utils import get_installer

import unittest


class TestSetup(unittest.TestCase):
    """Test that gitecinterlegislegbr is properly installed."""

    layer = GITECINTERLEGISLEGBR_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer["portal"]
        self.setup = self.portal.portal_setup
        self.installer = get_installer(self.portal, self.layer["request"])

    def test_product_installed(self):
        """Test if gitecinterlegislegbr is installed."""
        self.assertTrue(self.installer.is_product_installed("gitecinterlegislegbr"))

    def test_browserlayer(self):
        """Test that IGITECINTERLEGISLEGBRLayer is registered."""
        from gitecinterlegislegbr.interfaces import IGITECINTERLEGISLEGBRLayer
        from plone.browserlayer import utils

        self.assertIn(IGITECINTERLEGISLEGBRLayer, utils.registered_layers())

    def test_latest_version(self):
        """Test latest version of default profile."""
        self.assertEqual(
            self.setup.getLastVersionForProfile("gitecinterlegislegbr:default")[0],
            "20220805001",
        )


class TestUninstall(unittest.TestCase):

    layer = GITECINTERLEGISLEGBR_INTEGRATION_TESTING

    def setUp(self):
        self.portal = self.layer["portal"]
        self.installer = get_installer(self.portal, self.layer["request"])
        roles_before = api.user.get_roles(TEST_USER_ID)
        setRoles(self.portal, TEST_USER_ID, ["Manager"])
        self.installer.uninstall_product("gitecinterlegislegbr")
        setRoles(self.portal, TEST_USER_ID, roles_before)

    def test_product_uninstalled(self):
        """Test if gitecinterlegislegbr is cleanly uninstalled."""
        self.assertFalse(self.installer.is_product_installed("gitecinterlegislegbr"))

    def test_browserlayer_removed(self):
        """Test that IGITECINTERLEGISLEGBRLayer is removed."""
        from gitecinterlegislegbr.interfaces import IGITECINTERLEGISLEGBRLayer
        from plone.browserlayer import utils

        self.assertNotIn(IGITECINTERLEGISLEGBRLayer, utils.registered_layers())
