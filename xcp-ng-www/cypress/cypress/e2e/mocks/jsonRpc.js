cy.intercept("POST", "/jsonrpc", (req) => {
  const reply = {
    statusCode: 200,
    body: {
      result: {},
    },
  };
  let result = { foo: "bar" };
  switch (req.body.method) {
    case "session.login_with_password":
      result = { ok: true };
      break;
    case "SR.get_all_records":
      result = {
        one: {
          content_type: "notiso",
          physical_size: 1000,
          name_label: "one",
        },
        two: {
          content_type: "notiso",
          physical_size: 2000,
          name_label: "two",
        },
      };
      break;
    case "pool.get_all_records":
      result = {
        pool1: { default_SR: "one" },
      };
      break;
    case "network.get_all_records":
      result = {
        net1: {
          name_label: "net1",
          MTU: 1500,
        },
        net2: {
          name_label: "net2",
          MTU: 1500,
        },
      };
      break;
    case "VM.get_guest_metrics":
      result = ["foobarmetrics"];
      break;
    case "VM.import":
      result = ["foobar"];
      break;
    case "VM.get_VIFs":
      result = ["vif1", "vif2"];
      break;
    case "VM.add_to_xenstore_data":
      result = {};
      break;
    case "VIF.destroy":
      result = {};
      break;
    case "VM.get_allowed_VIF_devices":
      result = ["1", "2"];
      break;
    case "VIF.create":
      result = {};
      break;
    case "VM.start":
      result = {};
      break;
    case "PIF.get_all_records":
      result = {
        pif1: {
          network: "net1",
        },
      };
      break;
    case "VM_guest_metrics.get_networks":
      result = {
        "0/ip": "127.0.0.2",
      };
      break;
    case "VM.remove_from_xenstore_data":
      result = {};
      break;
    default:
      debugger;
      result = req.body.method + " NOT IMPLEMENTED YET";
      break;
  }
  reply.body.result = result;
  req.reply(reply);
});
