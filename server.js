const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.static('project'));



const corsOptions = {
    origin: 'http://localhost:4200/',
    credentials: true,
  };
  app.use(cors(corsOptions));

//MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'test_db'

})

connection.connect((err) => {
    if(err) {
        console.log('Error connectiong');
        return;
    }
    console.log('MySQL connected');
})

// -----------------------------------------------------------  Back Up  ---------------------------------------------------------
//CREATE BACKUP
app.post("/backup", async (req, res) => {
    const { ip, user, password, spassword, backup} = req.body;

    try {
        connection.query(
            "INSERT INTO devices(ip, user, password, spassword, backup) VALUES(?, ?, ?, ?, ?)",
            [ip, user, password, spassword, backup],
            (err, results, fields) => {
                if (err) {
                    console.log("Error while inserting a user into the database", err);
                    return res.status(400).send();
                }
                return res.status(201).json({ message: "successfully"});
            }
        )
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

//READ BACKUP
app.get("/getbackup", async(req, res) => {
    try {
        connection.query("SELECT * FROM devices", (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            return res.status(201).json(results)
        })
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

//get true(1)
app.put("/gettrue/:id", async(req, res) => {
    try {
        let id = req.params.id
        connection.query("UPDATE devices SET backup='1' WHERE id ="+ id, (err, results, fields) => {
            if (err) {
                console.log("Error while inserting a user into the database", err);
                return res.status(400).send();
            }

            return res.status(201).json({ message: "OK"});
        })
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

//get true
app.put("/gettrue", async(req, res) => {
    try {

        connection.query("UPDATE devices SET backup='1' ", (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            return res.status(201).json({ message: "all"})
        })
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})



//DELETE
app.delete("/deletebackup/:id", async(req, res) => {
    try {
        let id = req.params.id
        connection.query("DELETE FROM devices WHERE id ="+ id, (err, results, fields) => {
            if (err) {
                console.log("Error while inserting a user into the database", err);
                return res.status(400).send();
            }
            return res.status(201).json({ message: "DELETED"});
        })
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

//Download
app.get("/download/:id", async(req, res) => {
    try {
        let id = req.params.id
        connection.query("SELECT file_backup.file_name, file_backup.device_id, devices.id FROM file_backup LEFT JOIN devices ON file_backup.device_id = devices.id WHERE device_id = "+id, (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            return res.status(201).json(results)
        })
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})


app.get("/getget", async(req, res) => {
    try {

        connection.query("SELECT devices.id, devices.ip, devices.user, file_backup.file_name, file_backup.device_id , inventory.hostname FROM devices LEFT JOIN file_backup ON devices.id = file_backup.device_id LEFT JOIN inventory ON devices.id = inventory.device_id ", (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            return res.status(201).json(results)
        })
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ---------------------------------------------------  Configuration  ---------------------------------------------------------------

app.post("/config/post", async (req, res) => {
    const { ip, user, password, spass, sshow} = req.body;

    try {
        connection.query(
            "INSERT INTO config(ip, user, password, spass, sshow) VALUES(?, ?, ?, ?, ?)",
            [ip, user, password, spass, sshow],
            (err, results, fields) => {
                if (err) {
                    console.log("Error while inserting a user into the database", err);
                    return res.status(400).send();
                }
                return res.status(201).json({ message: "configsuccessfully"});
            }
        )
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})


app.get("/config/get", async(req, res) => {
    try {
        connection.query("SELECT * FROM `config`", (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            return res.status(201).json(results)
        })
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})


app.delete("/config/delete/:id", async(req, res) => {
    try {
        let id = req.params.id
        connection.query("DELETE FROM config WHERE id ="+ id, (err, results, fields) => {
            if (err) {
                console.log("Error while inserting a user into the database", err);
                return res.status(400).send();
            }
            return res.status(201).json({ message: "DELETEDIP"});
        })
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

//show ip int br
app.get("/config/shipintbr/", async(req, res) => {
    try {

        connection.query("SELECT sh_ip_int_br,id FROM `show_commands` ", (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            return res.status(201).json(results)
        })
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})


app.put("/shipintbr/:id", async(req, res) => {
    try {
        let id = req.params.id
        connection.query("UPDATE config SET sshow='1' WHERE id =" + id, (err, results, fields) => {
            if (err) {
                console.log("Error while inserting a user into the database", err);
                return res.status(400).send();
            }

            return res.status(201).json({ message: "OKK"});
        })
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

//Delete sh ip
app.delete("/config/delete/showip/:device_id", async(req, res) => {
    try {
        let device_id = req.params.device_id
        connection.query("DELETE FROM show_commands WHERE device_id ="+ device_id, (err, results, fields) => {
            if (err) {
                console.log("Error while inserting a user into the database", err);
                return res.status(400).send();
            }
            return res.status(201).json({ message: "DELETEDIPs"});
        })
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})


app.get("/join/:id", async(req, res) => {
    try {
        let id = req.params.id
        connection.query("SELECT config.id, config.ip, show_commands.sh_ip_int_br, show_commands.device_id, show_commands.showvlan, show_commands.showrun FROM config LEFT JOIN show_commands ON config.id=show_commands.device_id  WHERE show_commands.device_id = "+id,
         (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            return res.status(201).json(results)
        })
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

// ---------------- VLAN ------------------------------
app.post("/vlan", async (req, res) => {
    const {ip, vlan, interface, mode} = req.body;

    try {
        connection.query(
            "INSERT INTO vlan(ip, vlan, interface, mode) VALUES(?, ?, ?, ?)",
            [ip, vlan, interface, mode],
            (err, results, fields) => {
                if (err) {
                    console.log("Error while inserting a user into the database", err);
                    return res.status(400).send();
                }
                return res.status(201).json({ message: "vlan"});
            }
        )
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

//Create VLAN
app.post("/createvlan", async (req, res) => {
    const {ipp, intvlan} = req.body;

    try {
        connection.query(
            "INSERT INTO create_vlan(ipp, intvlan) VALUES(?, ?)",
            [ipp, intvlan],
            (err, results, fields) => {
                if (err) {
                    console.log("Error while inserting a user into the database", err);
                    return res.status(400).send();
                }
                return res.status(201).json({ message: "createvlan"});
            }
        )
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})








// ----------------------------------------  Inventory  --------------------------------------------------------
app.get("/inventory", async(req, res) => {
    try {

        connection.query("SELECT * FROM `inventory` ", (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            return res.status(201).json(results)
        })
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

app.put("/refresh", async(req, res) => {
    try {

        connection.query("UPDATE devices SET backup='1' " , (err, results, fields) => {
            if (err) {
                console.log("Error while inserting a user into the database", err);
                return res.status(400).send();
            }

            return res.status(201).json({ message: "RE"});
        })
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

app.delete("/deleteinventory", async(req, res) => {
    try {

        connection.query("DELETE FROM inventory", (err, results, fields) => {
            if (err) {
                console.log("Error while inserting a user into the database", err);
                return res.status(400).send();
            }
            return res.status(201).json({ message: "delAll"});
        })
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})



app.listen(3000, () => console.log('Server is running'));


